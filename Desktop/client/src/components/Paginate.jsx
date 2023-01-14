import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Paginate = (props) => {
  const [pages, setPages] = useState([]);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage ] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitShow] = useState(5);
  const [limitPaginate, setLimitPage] = useState(0);
  const [disabled, setDisabled] = useState({prev: true, next:true});
  const [showData, setShowData] = useState(50);

  useEffect( () => {
    const calculate = calculateLimitPaginator();
    const calculateEndPage = (calculate>limitShow)?limitShow:calculate;

    setLimitPage(calculate);
    setStartPage(1);
    setEndPage(calculateEndPage);
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.count])

  useEffect(() => {
    setDisabled(autoDisabled(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loading])

  useEffect ( () => {
    buildPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPage]);

  useEffect(() => {
    setDisabled(autoDisabled(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => { //any change in filters update de paginator and disable buttons
    if (props.limits.inferior===0) {
      const calculate = calculateLimitPaginator();
      const calculateEndPage = (calculate>limitShow)?limitShow:calculate;

      setLimitPage(calculate);
      setStartPage(1);
      setEndPage(calculateEndPage);
      setCurrentPage(1);
    } 

    setDisabled(autoDisabled(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.limits])

  const calculateLimitPaginator = ()=> { //calcula cual es el ultimo page del paginador
    const {limits, count} = props;
    const pagesCount = count/limits.superior;
    const enteroPages = parseInt(pagesCount);
    const limitPaginate = (pagesCount>enteroPages?(enteroPages+1):enteroPages);

    return limitPaginate;
  }

  const upFather = (side, currentPage) => { //calcula y actualiza los limits del componente padre
    let {superior, inferior} = props.limits;

    if (side==='n') 
      inferior = inferior+superior;
    else if (side==='p')
      inferior = inferior-superior;

    props.setLimits(
      {   
	inferior, 
	superior    
      },
      currentPage
    ); 
  }

  const buildPages = () => { //construir nuevamente los pages que se mostraran
    let size = Math.abs((endPage+1)-startPage);
    let pages = new Array(size || 0);
    let start = startPage;
    const count = pages.length;

    for(let i=0; i<count; i++){
      pages[i] = start++;
    }

    setPages(pages);
  }


  const autoDisabled = (currentPage) => { //calcula si los controles next y previous se tienen que deshabilitar
    const {loading} = props;
    let next = loading, prev = loading;

    if (!loading){
      next = currentPage===limitPaginate || endPage===0;
      prev = currentPage===1;
    }

    return {
      next,
      prev 
    }
  }

  const sideJump = (side, current) => { //calcula las pages de siguiente salto
    let start=startPage, end=endPage;

    if (side === 'n') {
      const sumEnd = (endPage+limitShow);
      start = startPage+limitShow;
      end = (sumEnd>limitPaginate)?limitPaginate:sumEnd;
    } 
    else if (side === 'p') {
      start = startPage-limitShow;
      end = start+(limitShow-1);
    }

    setStartPage(start);
    setEndPage(end);
  }

  const next = (newPage, side) => { //action to press next
    if (newPage > endPage) { //there are more pages so, sum it and calculate the nexts
      sideJump(side);
      buildPages();
    } 

    setDisabled(autoDisabled(newPage));
    setCurrentPage(newPage);
  }

  const previous = (newPage, side) => { //action para previous
    if ( newPage < startPage) { // there are more pages behind so, rest it and calculate the previous
	sideJump(side, currentPage);
	buildPages();
    }

    setDisabled(autoDisabled(newPage));
    setCurrentPage(newPage);
  }

  const CountElementsPage = () => {
    const {limits, count} = props;
    const elements = (limits.inferior+limits.superior);
    const lastIndex = (elements>count?count: elements);

    return (
      <label style={{fontSize:'11pt'}}>
      Elements: [ {lastIndex===0? 0: limits.inferior+1} -{lastIndex} ]
    </label>);
  }

  const changeLimites = ({target}) => { //cambia la cantidad de datos a mostrar en la pagina
    setShowData(target.value); 
    props.setLimits({inferior: 0, superior: parseInt(target.value)});
  }

  const clickPage = (value) => {
    const {superior} = props.limits;
    const inferior = (superior*value)-superior;
    setCurrentPage(value)

    props.setLimits({
      inferior,
      superior }, 
      value
    );

    setDisabled(autoDisabled(value));
  }

  const direction = ({target}) => { //choose the path and save the old page 
    const go = target.id;
    let newPage = currentPage;
    
    //be sure you can update currentPage
    if (go==='n' && currentPage!==limitPaginate){ //update to the next 
      ++newPage;
      next(newPage, go);
    } else if (go==='p' && currentPage!==1) { //update to the previous
      --newPage;
      previous(newPage, go);
    }

    upFather(go, currentPage);
  }

  const BarPaginate = () => (
    <div className="d-flex flex-wrap mb-2 justify-content-between">
      <div></div>
      <div className="d-flex flex-column ">
	{props.showCountElements && 
	<div align="center">
	  <CountElementsPage/>
	</div>
	}
	<ButtonGroup>
	  <Button id="p" color="link" onClick={direction} disabled={disabled.prev} >{'<< '} prev </Button>
	  {pages.map( (page, index) => (
	    <Button outline={page!==currentPage} color="primary" key={index} 
	      onClick={ page!==currentPage?(({target})=>clickPage(parseInt(target.innerHTML))):null }
	      disabled={props.loading}>
	      {page}
	    </Button>))
	  }
	  <Button id="n" color="link" onClick={direction} disabled={disabled.next} > next{' >>'}</Button>
	</ButtonGroup>
      </div>
      { props.showLimits?
	<div className="mt-5">
	  <InputGroup size="sm" >
	    <InputGroupAddon addonType="prepend">
	      <label>Show</label>
	    </InputGroupAddon>
	    <Input className="ml-1" type="select" bsSize="sm" value={showData}
	      disabled={props.loading} onChange={changeLimites}>
	      <option>50</option>
	      <option>100</option>
	      <option>200</option>
	    </Input>
	  </InputGroup>
	</div>
	:
	<div></div>
      }
    </div>
  )


  return (
    <div>
      <BarPaginate/>
      { props.children }
      <BarPaginate/> 
    </div>
  );
};

export default Paginate;
