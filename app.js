const app = require('express')();

app.get('/', (req, res) => {
   return res.status(200).json({
      'message': 'Welcome'
   })
})

app.listen(3000, () => {
   console.log(`API on http:localhost:3000`);
})
