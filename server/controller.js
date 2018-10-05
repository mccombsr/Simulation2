module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_all_houses()
            .then((response) => {
                res.status(200)
                    .send(response)
            })
            .catch((err) => {
                res.status(500).send({ errorMessage: "Well... crap..." })
            })
    },
    create: (req,res)=>{
        const {property_name, address, city, state, zip} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.create_house([property_name, address, city, state, zip])
        .then((response)=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            res.status(500).send({errorMessage: `Darn it all!!!`})
            console.log(err)
        })
        // res.send(console.log(product_name, price, image_url));
    },
    delete: (req, res)=>{
        let {id} = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.delete_house([id])
        .then((response)=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            res.status(500).send({errorMessage: `Why didn't that work?!`})
            console.log(err)
        })
    }

}