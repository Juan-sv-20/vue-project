<template>
  <div class="nav">
      <div class="nav-normal">
            <div class="nav-normal__logo">
                <div class="nav-normal__logo-img">
                    <img src="../assets/logo-v.png" alt="">
                </div>
                <div class="nav-normal__logo-span">
                    <span>EGANISIMO</span>
                </div>
            </div>
            <div class="nav-normal__menu">
                <ul class="nav-normal__menu-ul">
                    <li class="nav-normal__menu-ul-li" v-for="(page, index) in pages" :key="index"><a class="menu__ul-li-a" :href="page.route">{{ page.name }}</a></li>
                </ul>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            pages: [
                {
                    name: 'INICIO',
                    route: '/',
                },
                {
                    name: 'BLOG',
                    route: '/blog',
                },
                {
                    name: 'NOSOTROS',
                    route: '/about',
                },
            ],
            isOpenMenu: false,
            menuActive: 'menu-disable',
        }
    },
    watch: {
        isOpenMenu: function(){
            this.menuActive = this.isOpenMenu ? 'menu-active' : 'menu-disable';
        }
    },
    methods: {
        isOpen() {
            this.isOpenMenu = !this.isOpenMenu;
        }
    }
}
</script>

<style lang="scss">

    $size: 100px;

    .nav-normal {
        height: $size;
        display: grid;
        grid-template-columns: 300px 1fr;
        box-shadow: 0 0 5px 0 #DDDDDD;

        &__logo {
            display: grid;
            grid-template-columns: $size 1fr;

            &-img {
                width: $size;
                height: $size;

                img {
                    width: $size * .75;
                    height: $size;
                    margin-left: 25px;
                }
            }
            &-span {
                display: flex;

                span {
                    font-family: 'Laila', serif;
                    color: #4CB848;
                    font-size: 30px;
                    text-shadow: 2px 2px 5px #2D6123;
                    margin-top: 50px;
                    margin-left: -10px;
                }
            }
        }

        &__menu {
            display: flex;
            justify-content: flex-end;

            &-ul {
                flex-basis: 300px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;

                &-li {
                    list-style-type: none;
                    font-family: 'Laila', serif;
                    font-size: 20px;
                    margin: 40px auto 17px auto;
                    padding-bottom: 20px;

                    a {
                        text-decoration: none;
                        color: #4CB848;
                    }
                }
                &-li:hover {
                    border-bottom: 2px solid #2D6123;

                    a {
                        color: #2D6123;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 800px) {
        .nav {
            height: 180px;
            &-normal {
                height: 100%;
                grid-template-rows: 100px 1fr;
                grid-template-columns: none;

                &__logo {
                    display: grid;
                    grid-template-columns: 1fr;
                    margin: auto;

                    &-img {
                        width: $size * .75;;
                        height: $size;

                        img {
                            width: $size * .75;
                            height: $size;
                            margin-left: 0;
                        }
                    }
                    &-span {
                        display: none;
                    }
                }

                &__menu {
                    display: flex;
                    justify-content: center;

                    &-ul {
                        flex-basis: auto;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;

                        &-li {
                            font-size: 20px;
                            margin: auto;
                            padding-bottom: 10px;

                        }
                    }
                }
            }
        }
    }
</style>