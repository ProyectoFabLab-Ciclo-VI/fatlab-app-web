export const environment = {
    API_URL: import.meta.env.NG_APP_API_URL_PRODUCTION,
    API_CLOUDINARY_URL: `https://api.cloudinary.com/v1_1/${import.meta.env.NG_APP_NAME_CLOUDINARY_PRODUCTION}`,
    API_KEY_CLOUDINARY: import.meta.env.NG_APP_API_KEY_CLOUDINARY_PRODUCTION,
};
