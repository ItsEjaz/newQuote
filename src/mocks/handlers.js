import {rest} from 'msw';


const qoute={
    content:"Love all, trust a few, do wrong to none.",author:"William Shakespeare"
}

export const handlers=[
rest.get(`https://api.quotable.io/random`,(req,res,ctx)=>{
    return res(
        ctx.status(200),
        ctx.json(
            object.entries(qoute) 
        )
    )
})

]

// Response resolver is a function that accepts the following arguments:

// req, an information about a matching request;
// res, a functional utility to create the mocked response;
// ctx, a group of functions that help to set a status code, headers, body, etc. of the mocked response.