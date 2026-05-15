export default function ProductAvatar({img}) {
console.log('image', img);

   return (
      <div className='product-avata'>
         <img src={img} alt="product-image" />
      </div>
   );
}

