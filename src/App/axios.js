import axios from 'axios';

const instance = axios.create({
    baseURL: `https://deisantix-miniature-enigma-v7pjp7x9ww6h6w6v-8080.preview.app.github.dev`,
});

export default instance;
