// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const fetch_base = require('fetch-base64');

type Data = any;
// type Data = {
//     name: string,
//     img: any
// }

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {

    const site = 'http://37.44.209.11/snap.jpeg';
    const getImage = async () => {
        // const response = await fetch(site)
        const response = await fetch_base.remote(site).then((data: any) => data[1])
            .catch(() => {
                console.log("oh no ");

            });

        // const response = await fetch(site)
        // .then(response => response.arrayBuffer().toString())

        // .then(response => response.blob())
        // .then(imageBlob => {
        //     // Then create a local URL for that image and print it 
        //     const imageObjectURL = URL.createObjectURL(imageBlob);
        //     console.log(imageObjectURL);
        // });

        // .then((res: any) =>
        //     res.body.pipe(fs.createWriteStream('public/image.jpeg'))
        // )
        // console.log(response);
        // return response;
        return response;

    }
    let content = await getImage();
    // console.log(content);
    // console.log(content.body);
    res.status(200).json({ name: 'John fdsDoe', data: content })
}

export default handler;