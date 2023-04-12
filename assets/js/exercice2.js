$(document).ready(function() {
    let generatedIds = [];

    for (let i = 1; i <= 3; i++) {
        $.ajax({
            url: `https://dummyjson.com/products/${i}`,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                generatedIds.push(i);

                console.log(response);

                let product = $('.product-template').clone();
                product.removeClass('product-template');
                product.addClass(`product-${i}`);

                oldPrice = response.price - (response.price * response.discountPercentage / 100);

                product.find('.name .title').text(response.title);
                product.find('.name .brand').text(`(${response.brand})`);
                product.find('.price').text(`${response.price} €`);
                product.find('.old-price').text(`${oldPrice} €`);
                product.find('.stock').text(`${response.stock}`);
                product.find('.img').attr('src', response.thumbnail);
                
                $('body').append(product);
            },
            error: function() {
                console.log(`Erreur`);
            }
        });
    }    
    
    console.log(generatedIds);

    $('#product-generation').click(function () {
        if (generatedIds.length >= 100) {
            console.log("100 produits");
            $(this).prop('disabled', true);
            return;
        }      
        
        let productId;
        do {
          productId = Math.floor(Math.random() * 100) + 1;
        } while (generatedIds.includes(productId));
      
        generatedIds.push(productId);      

        $.ajax({
            url: `https://dummyjson.com/products/${productId}`,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log(response);

                let product = $('.product-template').clone();
                product.removeClass('product-template');
                product.addClass(`product-${productId}`);

                oldPrice = response.price - (response.price * response.discountPercentage / 100);

                product.find('.name .title').text(response.title);
                product.find('.name .brand').text(`(${response.brand})`);
                product.find('.price').text(`${response.price} €`);
                product.find('.old-price').text(`${oldPrice} €`);
                product.find('.stock').text(`${response.stock}`);
                product.find('.img').attr('src', response.thumbnail);
                
                $('body').append(product);
            },
            error: function() {
                console.log(`Erreur`);
            }
        });
    });
});