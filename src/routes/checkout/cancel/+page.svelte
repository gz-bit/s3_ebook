<script lang="ts">
  import { HeroSection, CheckoutButton, ExploreButton } from "$components"
  import {PUBLIC_FRONTEND_URL} from "$env/static/public"

</script>

<HeroSection>
  <h2>ERROR WHILE</h2>
  <h2 class="mb-l">PURCHAISING</h2>
  <p class="light-grey mb-s">
    We’re sorry, but it looks like there was an issue with your purchase. Don’t
    worry—these things happen, and we're here to help. Please double-check your
    payment details and try again.
  </p>
  <p class="light-grey mb-s">
    We apologize for any inconvenience this may have caused and appreciate your
    patience. We’re committed to ensuring that you get the guide you need to
    make your move to Spain as smooth as possible.
  </p>
  <p class="light-grey mb-m">
    If you’d like to try again, please click the button below to return to the
    checkout page.
  </p>
  <CheckoutButton>Try again</CheckoutButton>
  <br>
  <a href={PUBLIC_FRONTEND_URL}>
    <ExploreButton class="mt-s" onclick={()=>{}}>Explore further</ExploreButton>
  </a>
</HeroSection>
