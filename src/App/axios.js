import axios from 'axios';

const instance = axios.create({
    baseURL: `https://deisantix-super-guacamole-jwrprwxv7wq35vgr-5000.preview.app.github.dev`,
});

export default instance;
