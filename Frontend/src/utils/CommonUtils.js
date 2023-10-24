class CommonUtils {
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }
    static  formatCurrency(number) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(number);
    }
    static discountPrice(prevPrice,discount){
        const discountPercentage = discount; // Giảm giá dưới dạng phần trăm
        const discountDecimal = discountPercentage / 100; // Giảm giá dưới dạng số thập phân
        const discountedPrice = prevPrice * (1 - discountDecimal); // Giá sau khi giảm giá
        return discountedPrice;
    }
}

export default CommonUtils;