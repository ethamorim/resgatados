import axios from 'axios';

const instance = axios.create({
    baseURL: `https://deisantix-super-guacamole-jwrprwxv7wq35vgr-3000.preview.app.github.dev`,
});

export default instance;
