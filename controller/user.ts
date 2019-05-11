const sleep = async (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}
export default class User {
    static login(ctx: any){
        ctx.body = {
            username: ctx.request.body.username
        }
    }
    static async profile(ctx: any){
        await sleep(1000);
        ctx.body = {
            username: "ccc",
            sex: '1',
            age: '27'
        }
    }
}