import axios from "axios";


let apiFunc = {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=15&nat=dk");
  }
};

export default apiFunc