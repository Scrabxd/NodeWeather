import React from 'react';
import '../styles/autocomplete.css';

class autoComplete extends React.Component{
    state= {
        inputValue: '',
        optionsFilter: [],
        options: []
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.options !== this.props.options)
            this.setState({
                optionsFilter: this.props.options,
                options: this.props.options
            })
    }

    itemChangeInput = (value, e) =>{
        document.querySelector('#inputAutocomplete').focus();
        this.props.onItemSelected(e);

        this.setState({inputValue: value});
    }

    inputChange = (e) =>{
        let {options} = this.state;
        const inputValue = e.target.value;
        this.props.onInputChange(e);

        options = options.filter(option => (
            option.label.toLowerCase().replace(/ /g, "").search(
                inputValue.toLowerCase().replace(/ /g, "")
                )!==(-1)
        ));

        this.setState({
            inputValue, 
            optionsFilter: options
        });
    }

    checkFilter = () => {
        let {options, inputValue, optionsFilter} = this.state;

        options = options.filter(option => 
            option.label.toLowerCase().replace(/ /g, "").search(inputValue.toLowerCase().replace(/ /g, ""))!==-1
        );
            
        if(optionsFilter!==options)
            this.setState({optionsFilter: options});
    }

    render(){
        const {
            inputValue,
            optionsFilter
        } = this.state;

        return (
            <div style={{display: 'block'}}>
                <input 
                    id="inputAutocomplete"
                    ref="inputAutocomplete" 
                    value={inputValue}
                    placeholder={this.props.placeholder}
                    className="form-control"
                    type="search" 
                    disabled={this.props.isDisabled}
                    autoComplete="off" 
                    onChange={this.inputChange}
                    style={{fontSize: '10pt', paddingTop: '1.2rem', paddingBottom: '1.1rem'}}
                />
                <div ref="menu" className="select-menu" id="select-menu-1">
                    {optionsFilter.map(option => {
                        return <div onClick={ e =>this.itemChangeInput(e.target.innerHTML, e)} 
                            key={option.id} 
                            id={option.id}>
                            {option.label}
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

autoComplete.defaultProps = {
    onItemSelect: ()=>null,
    onInputChange: ()=>null,
    options: []
}

export default autoComplete;