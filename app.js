import express from "express";

const app = express();
app.use(express.static(`public`));
app.use(express.static(`views`));
app.use(express.urlencoded({extended:true}));
app.set(`view engine`,`ejs`);

const bookWishlist = [];
const PORT = 3000;

app.listen(PORT,(req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get(`/`,(req,res) => {
    res.render(`home`);
});
app.post(`/submit-book`,(req,res)=> {
    const newBook = {
        title: req.body.title,
        comments: req.body.comments,
        rating: req.body.rating
    }
    console.log(newBook);
    bookWishlist.push(newBook);
    res.render(`summary`,{bookWishlist});
});
