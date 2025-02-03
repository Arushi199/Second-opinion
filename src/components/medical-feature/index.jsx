import PropTypes from "prop-types";

const MedicalFeature = ({ data }) => {
    return (
        <div className="content">
            <h1 className="title">{data.title}</h1>
            <p>{data.content}</p>
        </div>
    );
};

MedicalFeature.propTypes = {
    data: PropTypes.object,
};

export default MedicalFeature;
