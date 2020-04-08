let AWS = require("aws-sdk");

//
//	LAMBDA_DESCRIPTION
//
exports.handler = (event) => {

	return new Promise(function(resolve, reject) {

		//
		//	1. This container holds all the data to be passed around the chain.
		//
		let container = {
			req: {},
			//
			//	The default response for Lambda.
			//
			res: {
                message: "OK"
            }
		}

		//
		//	->	Start the chain.
		//
		step_one(container)
			.then(function(container) {

				return step_two(container);

			}).then(function(container) {

				//
				//  ->  Send back the good news.
				//
				return resolve(container.res);

			}).catch(function(error) {

				//
				//	->	Stop and surface the error.
				//
				return reject(error);

			});
	});
};

//	 _____    _____     ____    __  __   _____    _____   ______    _____
//	|  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
//	| |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
//	|  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
//	| |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
//	|_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

//
//
//
function step_one(container)
{
	return new Promise(function(resolve, reject) {

        console.info("step_one");

        //
        //	->	Move to the next promise.
        //
        return resolve(container);

	});
}

//
//
//
function step_two(container)
{
	return new Promise(function(resolve, reject) {

		console.info("step_two");

		//
        //	->	Move to the next promise.
        //
        return resolve(container);

	});
}
