<template>
    <div class="footer">
        <div class="social-media">
            <ul>
                <li v-for="(media, index) in social" :key="index">
                    <a :href="media.urlLink" target="_blank">
                        <i :class="media.class"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            <span>@2021 Veganisimo Todos los derechos reservados</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            social: [
                {
                    urlLink: 'https://www.facebook.com/Veganisimo-ensenada-100760355259842',
                    class: 'social-logo fab fa-facebook-square',
                },
            ],
        }
    }
}
</script>

<style lang="scss">
    .footer {
        height: 100%;
        width: 100%;
        background: #999;
        display: grid;
        grid-template-columns: 50px 1fr 50px;

        .copyright {
            display: flex;
            margin: auto;

            font-size: 20px;
        }

        .social-media {
            padding: 5px;

            ul {
                li {
                    list-style-type: none;
                    a {
                        text-decoration: none;
                        .social-logo {
                            color: #222;
                            font-size: 40px;
                        }
                    }
                }
            }
        }
    }
</style>