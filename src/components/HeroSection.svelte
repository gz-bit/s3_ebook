<script lang="ts">
  import bookCover from '$assets/book_cover.png'
  import phoneCover from '$assets/phone_cover.png'
  import { CheckoutButton } from '$components'

  const { children } = $props()
</script>


<section class="hero">
  <div class="hero-showcase text-center bold">
    <h1 class="purple">MOVE TO</h1>
    <h1 class="purple mb-xs">SPAIN</h1>
    <h4 class="italic semi-bold">There is no need to make the same mistakes I made.</h4>
    <img class="book-cover" src={bookCover} alt="Book cover" />
    <img class="phone-cover" src={phoneCover} alt="Phone cover" />
  </div>
  <div class="hero-text white text-center">
    {#if children}
      {@render children()}
    {:else}
      <h2>THIS EBOOK WILL</h2>
      <h2>SAVE YOU MONEY,</h2>
      <h2 class="mb-m">TIME & NERVES</h2>
      <p class="light-grey mb-l">
        I moved to Spain in 2019 and I have learned a lot since then. 
        I have made many mistakes and I have learned from them. 
        I want to share my experience with you so you can avoid making the same mistakes I made.
      </p>

      <CheckoutButton>Purchase this E-book for $10</CheckoutButton>
    {/if}
</section>


<style>
  .hero {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    width: 35%;
    bottom: 0;
    right: 52%;
    transform: translateY(25%);
  }
</style>
