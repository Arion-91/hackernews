import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

let styles = {
    base: {
        border: '0',
        background: 'transparent',
        color: 'blue',
        textAlign: 'inherit',
        padding: 0,
        fontSize: 'inherit',
        cursor: 'pointer',

        ':hover': {
            color: 'lightblue',
        },
    }
};

const Button = ({onClick, className, children} ) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
        style={styles.base}
    >
        {children}
    </button>;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    className: ''
};

export default Radium(Button);