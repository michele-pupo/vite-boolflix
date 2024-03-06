<script>
    export default{
        name: 'Appnavbar',
    }
</script>

<template>
  <nav>
    <div class="container">
      <div id="container-nav">
        <div id="logo-links">
          <img src="../../public/img/BrandAssets_Logos_01-Wordmark.jpg" alt="">
          <div id="links">
            <ul>
              <li>Home</li>
              <li>Serie TV</li>
              <li>Fans</li>
              <li>Original</li>
              <li>Aggiunti di recente</li>
              <li>La mia lista</li>
            </ul>
          </div>
        </div>
        <div id="search-bar">
          ciao
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  nav{
    background-color: #101010;

      #container-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        #logo-links{
          height: 120px;
          width: 100%;
          display: flex;
          align-items: center;

          img{
            height: 100%;
          }

          #links{
            ul{
              display: flex;
              list-style-type: none;
              gap: 25px;
            }
          }
        }
      }
  }
  
</style>