// 模拟服务端数据返回

function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}

export async function getToDoList() {
  await sleep();
  return ['a', 'b', 'c', 'd', 'e', 'f']
}