function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function series() {
    await wait(1500);
    await wait(1500);
    return "done";
}

async function parallel() {
    const wait1 = wait(1500);
    const wait2 = wait(1500);
    await wait1;
    await wait2;
    return "done!";
}

series();
parallel();