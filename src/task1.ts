const totalPrice = ({price, discount, isInstallment, months}:
      { price: number, discount: number, isInstallment: boolean, months: number }): number => {
    const result: number = price - price * (discount / 100);

    return isInstallment ? (result / months) : result;
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
