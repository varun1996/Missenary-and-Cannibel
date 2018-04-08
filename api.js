let user = require('./user');

module.exports = {
	singUp: function(data) {
		return new Promise((resolve,reject)=> {
			console.log(data.image+"in api");
			user.create(data,function(err,result) {
				if(err) {
					reject(err);
				}
				else
					resolve(result);
			})
		})
	}
}