export class Resolver = (handlerFn) => {
    return (req,res,next) => {
        return Promise.Resolve(handlerFn(req,res,next))
        .catch(e => next(e));
    }
}