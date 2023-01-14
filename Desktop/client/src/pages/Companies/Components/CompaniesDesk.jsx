import React, { useState, useEffect } from "react";
import "./Companies.scss";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Select, Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import FiltersCompanies from "./FiltersCompanies";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Scroll from "../../../components/scroll";
//Icons pagination
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function CompaniesDesk(props) {
  const [companies, setCompanies] = useState();
  const [companyName, setCompanyName] = useState("");
  const [openPositions, setOpenPositions] = useState(false);
  const [numCompanies, setNumCompanies] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const handleOpenPositions = () => setOpenPositions(true);
  const handleClose = () => setOpenPositions(false);
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .post("/postAllCompanies", { datas })
      .then((res) => {
        const datos = [res.data.output];
        setCompanies(datos[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/countCompanies")

      .then((res) => {
        const datos = [res.data.count];
        setNumCompanies(datos[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect( () => {

    setData( props.filt )

  }, [ props.filt])

  useEffect(() => {
    axios.post("/postAllCompanies", {datas})
    .then((res) => {
            const datos = [res.data.output];
            setCompanies(datos[0]);
            console.log(res, "Datosss.");
            setNumCompanies(datos[0].length)
          })
    .catch(error => {
      console.error(error);
      
    });
  }, [ datas ])


  const onHandlePostsPerPage = (numberOfPosts) => {
    // cuando cambia la cantidad de posts por pagina, volvemos a la primera pagina
    setPostsPerPage(numberOfPosts);
    setCurrentPage(1);
  };

  const onNextPage = () => {
    if (lastPostIndex >= companies.length) return;
    setCurrentPage(currentPage + 1);
  };

  const onPrevPage = () => {
    if (firstPostIndex === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const onFirstPage = () => {
    if (firstPostIndex === 0) return;
    setCurrentPage(1);
  };

  const onLastPage = () => {
    if (lastPostIndex >= companies.length) return;
    setCurrentPage(Math.ceil(companies.length / postsPerPage));
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <TableContainer
      component={Paper}
      className="companiesDeskContainer"
      sx={{
        width: {
          xs: "95%",
          sm: "70%",
        },
        borderRadius: "12px",
      }}
    >
      <Scroll>
        <TextField
          placeholder="Filters"
          variant="outlined"
          size="small"
          fullWidth
          type="text"
          disabled
          value={datas.join(", ")}
          sx={{ width: "95%", float: "left", ml: "1rem", mt: "1rem" }}
        />

        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Website</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies ? (
              companies
                .slice(firstPostIndex, lastPostIndex)
                .map((companie, index) => (
                  <TableRow
                    className="tableRowCompaniesHover"
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                      handleOpenPositions(), setCompanyName(companie.name);
                    }}
                  >
                    <TableCell align="left">
                      {/* {paginationCompanies.offset + index + 1} */}
                      {firstPostIndex + index + 1}
                    </TableCell>
                    <TableCell align="left">{companie.name}</TableCell>
                    <TableCell align="center">{companie.category}</TableCell>
                    <TableCell align="center">{companie.website}</TableCell>
                    <TableCell align="center">{companie.email}</TableCell>
                    <TableCell align="center">{companie.description}</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  <CircularProgress sx={{ color: "#243071" }} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Scroll>
      <div className="paginationContainerCompanies">
        <div className="paginationTextCompanies">
          <span>Companies per page </span>
          <Select
            size="small"
            defaultValue="15"
            onChange={(e) => onHandlePostsPerPage(e.target.value)}
          >
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
          <span className="textPagesCompanies">
            {firstPostIndex} - {firstPostIndex + postsPerPage} of{" "}
            {numCompanies ? (
              numCompanies
            ) : (
              <CircularProgress
                size={12}
                sx={{ color: "#243071", marginLeft: "9px" }}
              />
            )}
          </span>
        </div>
        <div className="buttonsPaginationContainerCompanies">
          <IconButton
            onClick={onFirstPage}
            size="small"
            className="buttonPagination"
          >
            <KeyboardDoubleArrowLeftIcon size="large" />
          </IconButton>
          <IconButton
            onClick={onPrevPage}
            size="small"
            className="buttonPagination"
          >
            <KeyboardArrowLeftIcon size="large" />
          </IconButton>

          <IconButton
            onClick={onNextPage}
            size="small"
            className="buttonPagination"
          >
            <KeyboardArrowRightIcon size="large" />
          </IconButton>

          <IconButton
            onClick={onLastPage}
            size="small"
            className="buttonPagination"
          >
            <KeyboardDoubleArrowRightIcon size="large" />
          </IconButton>
        </div>
      </div>
    </TableContainer>
  );
}
