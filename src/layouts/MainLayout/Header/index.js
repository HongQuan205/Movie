import React, {useState,useEffect} from 'react'

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { scroller } from 'react-scroll'

import {LOGOUT} from '../../../reducers/constants/Auth'
import useStyles from './style'
import { FAKE_AVATAR } from '../../../constant.js/config';
import { LOADING_BACKTO_HOME } from '../../../reducers/constants/Lazy';
import { getMovieList } from '../../../reducers/actions/Movie';