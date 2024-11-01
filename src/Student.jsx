import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>AGE: {props.age}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}
Student.defaultProps = {
    name: "Test",
    age: 34,
}

export default Student;