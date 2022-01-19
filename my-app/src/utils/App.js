
import axios from "axios";



export let profileInfo =  axios.get("https://api.github.com/users/bryonbsmb1")
export let repos =  axios.get("https://api.github.com/users/bryonbsmb1/repos")