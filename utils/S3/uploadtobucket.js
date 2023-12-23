export default function Upload(f) {
	const AWS = require("aws-sdk");
	const config = {
		endpoint: process.env.NEXT_PUBLIC_AWS_ENDPOINT,
		region: "default",
		credentials: {
			accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
			secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY
		},
	};

	const client = new AWS.S3(config);

	const params = {
		Body: "",
		Bucket: "minio-w68hwq",
		Key: "",
	};
	const reader = new FileReader();
	reader.readAsArrayBuffer(f);
	reader.onload = () => {
		params.Body = reader.result;
		params.Key = f.name;
		client.upload(params, function (err, data) {
			if (err) {
				console.log("Error", err);
			}
			if (data) {
				alert("Uploaded Successfully!");
			}
		});
	};
}
