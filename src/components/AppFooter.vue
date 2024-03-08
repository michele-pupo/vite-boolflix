<script>
    export default{
        name: 'AppFooter',

        data() {
            return {
                links: [
                    'Domande frequenti',
                    'Media Center',
                    'Riscatta carta regalo',
                    'Condizioni di utilizzo',
                    "Informazioni sull'azienda",
                    'Garanzia legale',
                    'Preferenze per la pubblicità',
                    'Centro assistenza',
                    'Rapporti con gli investitori',
                    'Acquista carte regalo',
                    'Privacy',
                    'Contattaci',
                    'Note legali',
                    'Account',
                    'Opportunità di lavoro',
                    'Come guardare Boolflix',
                    'Preferenze per i cookie',
                    'Test di velocità',
                    'Solo su Boolflix'
                ]
            }
        },
    };
</script>

<template>
    <div id="footer">
        <div id="footer-language">
            <div class="language-dropdown">
                <label for="language-select">Seleziona Lingua:</label>
                <select id="language-select">
                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                </select>
            </div>
            <h5>Boolflix Italia</h5>
        </div>
        <ul id="links">
            <li v-for="currentLink in links">
                <a href="#">{{ currentLink }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/_variables' as *;

    #footer{
        height: 170px;
        width: 100%;
        background-color: $secondary-color;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 400px;
        padding: 20px 100px;

        ul{
            list-style-type: none;
            display: flex;
            flex-flow: column wrap;
            align-content: center;
            height: 100%;
            row-gap: 10px;
            column-gap: 50px;

            li{
                text-decoration: underline;
                
                a{
                    color: #959595;
                    &:hover{
                        color: white;
                    }
                }
            }
        }

        #footer-language{
            gap: 40px;

            .language-dropdown{
                display: flex;
                gap: 10px;
                padding-bottom: 40px;

                label{
                    text-wrap: nowrap;
                }

                select{
                    cursor: pointer;
                }
            }
        }

        h5{
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;

        }
    }

    /* versione mobile */
    @media screen and (max-width: 576px){
        #footer{
            padding: 10px;
            gap: 0px;
            display: flex;
            align-items: center;
        }

        #footer-language{
            display: flex;
            font-size: 10px;
            align-items: flex-end;
        }

        a{
            display: none;
        }
    }
</style>