module.exports = (client) => {
    const db = client.db('wormery');
    const col = db.collection('worms');
  
    function findByClass(className, cb) {
      return col.find({ class: className }, (err, worms) => {
        if (err) return cb(err);
  
        return worms
          .limit(10)
          .toArray(cb);
      });
    }
  
    return {
      findByClass,
    };
  };