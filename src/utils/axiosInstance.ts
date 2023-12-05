import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev-smartspy.naorisprotocol.com/api-spy/', // Replace this with your API base URL
  // You can add other default configurations here (headers, timeout, etc.)
});

export default axiosInstance;
