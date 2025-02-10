// server.ts
import { app } from './app'; 

const port = process.env.PORT || 3000;

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
