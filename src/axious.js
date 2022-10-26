import axios from 'axios'
import {baseurl} from './constants/constatns'
const instance = axios.create({
    baseURL: baseurl,
   
  });
  export  default instance