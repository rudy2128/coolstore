$(function () {
    
      $('.tombolTrx').on('click', function(){

          const id = $(this).data('id');

          $.ajax({
              url: 'http://localhost/tawakalputra/public/home/getProduct',
              data: { id: id },
              method: 'post',
              dataType: 'json',
              success: function (data) {
                $('#proId').val(data.proId);
                $('#nama').val(data.title);
                $('#desc').val(data.desc);
                $('#sell_price').val(data.sell_price);
                $('#id').val(data.id);
                
              }
          });
      });


      

   
      
      $('.tombolModalBuy').on('click', function(){
          

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/tawakalputra/public/input/getubah',
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function(data) {
             console.log(data);
                  
                
            }

        });
      });

  
      
   
    
});

