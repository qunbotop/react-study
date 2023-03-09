const fun = async () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(); // 代码正常执行！
    }, 3000);
  });
};
