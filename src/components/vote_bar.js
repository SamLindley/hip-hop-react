import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';


class VoteBar extends Component {

    renderField(field){

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? `has-danger` : ''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }


    onSubmit(values){
        console.log(values);
        console.log(this.props.selectedArtist.id);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="row voteBar">

                    <div className="col-6">
                        <Field
                            label="Flow Rating : : :"
                            name="flow"
                            component={this.renderField}
                        />
                    </div>

                    <div className="col-6">
                        <Field
                            label="Wordplay Rating : : :"
                            name="wordplay"
                            component={this.renderField}
                        />

                    </div>
                    <button id="submitButton" type="submit" className="btn btn-info">Submit</button>
                </div>
            </form>

        );
    }
    

}

function validate(values){
    console.log(values);
    const errors = {};
    if(!values.wordplay){
        errors.wordplay = "Rate the words!";
    }else if(isNaN(values.wordplay) || (values.wordplay > 10 || values.wordplay < 0)){
        errors.wordplay = "A number between 0 and 10!";
    }
    if(!values.flow){
        errors.flow = "Rate the flow!";
    } else if(isNaN(values.flow) || (values.flow > 10 || values.flow < 0)){
        errors.flow = "A number between 0 and 10!";
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        selectedArtist: state.selectedArtist
    }
}

VoteBar = connect(mapStateToProps)(VoteBar);

export default reduxForm({
    validate: validate,
    form: 'VoteBar'
})(VoteBar);