<template>
    <div>
        <v-app id="inspire">
            <v-card v-bind:style="cardObject">
                <v-navigation-drawer
                    v-model="sideNav"
                    :mini-variant.sync="mini"
                    permanent
                    disable-route-watcher
                    enable-resize-watcher
                    :clipped="clipped"
                    dark
                    app
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img
                                src="https://icon-library.net//images/default-user-icon/default-user-icon-9.jpg"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-title>Vibe User</v-list-item-title>

                        <v-btn class="openclose" icon @click.stop="flipMini">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item v-for="item in items" :key="item.title" link>
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <div v-bind:style="userInfoObject">
                    <figure class="image is-128x128" v-bind:style="profileImageObject">
                        <img
                            class="is-rounded"
                            src="https://icon-library.net//images/default-user-icon/default-user-icon-9.jpg"
                        />
                    </figure>
                    <p v-bind:style="userNameObject">User Name</p>
                </div>
                <div v-bind:style="trackListObject">
                    <li>track1</li>
                    <li>track2</li>
                </div>
                <div v-bind:style="graphsObject">
                    <p>Graphs place holder</p>
                </div>
            </v-card>
        </v-app>
    </div>
</template>

<script>
import {
    VApp,
    VCard,
    VNavigationDrawer,
    VListItem,
    VListItemAvatar,
    VImg,
    VListItemTitle,
    VListItemContent,
    VBtn,
    VIcon,
    VDivider,
    VList,
    VListItemIcon
    /* other imports ... */
} from 'vuetify/lib';
export default {
    name: '',
    components: {
        VApp,
        VCard,
        VNavigationDrawer,
        VListItem,
        VListItemAvatar,
        VImg,
        VListItemTitle,
        VBtn,
        VIcon,
        VDivider,
        VList,
        VListItemIcon,
        VListItemContent
    },
    props: {
        callMe: {
            type: Function
        }
    },
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Feed', icon: 'mdi-home-city' },
                { title: 'Profile', icon: 'mdi-account' },
                { title: 'Search', icon: 'mdi-account-group-outline' }
            ],
            mini: true,
            cardObject: {
                height: '100%'
            },
            profileImageObject: {
                width: '50px',
                float: 'left'
            },
            userInfoObject: {
                width: '100%',
                marginTop: '75px',
                marginLeft: '120px',
                height: '100px'
            },
            userNameObject: {
                display: 'table-cell',
                paddingTop: '15px',
                paddingLeft: '10px'
            },
            trackListObject: {
                float: 'left'
            },
            graphsObject: {
                float: 'left',
                paddingLeft: '50px'
            }
        };
    },
    methods: {
        flipMini() {
            this.mini = !this.mini;
            this.callMe('flip');
        }
    }
};
</script>
