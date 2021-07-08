import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Styles from './header.module.css';

const Header = ({title}) => (
    <Paper elevation={2} className={Styles.container}>
        <div className={Styles.title}>
            <Typography variant="h6">{title}</Typography>
        </div>
    </Paper>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;