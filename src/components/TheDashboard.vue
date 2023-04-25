<script setup>
import redTicket from '../assets/icons/red.svg'
import blueTicket from '../assets/icons/blue.svg'
import yellowTicket from '../assets/icons/yellow.svg'

import { mapActions, mapGetters } from 'vuex'

</script>

<script>
export default {
    name: "TheDashboard",
    data() {
        return {
            dashboardList: [
                {
                    id: 1,
                    class: 'blue',
                    price: 0,
                    title: 'Jami to‘langan summa',
                    img: blueTicket,
                },
                {
                    id: 2,
                    class: 'yellow',
                    price: 0,
                    title: 'Jami so‘ralgan summa',
                    img: yellowTicket,
                },
                {
                    id: 3,
                    class: 'red',
                    price: 0,
                    title: 'To‘lanishi kerak summa',
                    img: redTicket,
                },
            ]
        }
    },
    methods: {
        ...mapActions(['fetchDashboard']),
    },
    computed: {
        ...mapGetters(['getDashboardList']),
    },
    watch: {
        'getDashboardList': function (data) {
            this.dashboardList[0].price = data.total_paid
            this.dashboardList[1].price = data.total_need
            this.dashboardList[2].price = data.total_must_pay
        }
    },
    mounted() {
        this.fetchDashboard()
    }
}
</script>

<template>
    <section class="dashboard">
        <div class="container">
            <ul class="dashboard__features">
                <li v-for="(item, index) in dashboardList"
                    :key="index"
                    class="dashboard__features-item item">
                    <div :class="item.class"
                        class="item__img">
                        <img :src="item.img"
                            :alt="`ticket ${item.class}`">
                    </div>
                    <div class="item__box">
                        <h4 class="item__title">{{ item.title }}</h4>
                        <h3 class="item__price">{{ item.price.toLocaleString().replaceAll(',', ' ') }} <span>UZS</span></h3>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.dashboard {
    padding: 48px 0px;

    &__features {
        display: flex;
        align-items: center;
        gap: 30px;

        &-item {
            width: calc(100% / 3 - 15px);
            background: #FFFFFF;
            border: 1px solid rgba(46, 91, 255, 0.08);
            border-radius: 8px;
            padding: 24px;
        }

        .item {
            display: flex;
            align-items: center;
            gap: 16px;

            &__img {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;

                &.blue {
                    background: rgba(76, 111, 255, 0.1);
                }

                &.yellow {
                    background: rgba(237, 199, 0, 0.1);
                }

                &.red {
                    background: rgba(237, 114, 0, 0.1);
                }
            }

            &__box {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            &__title {
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
                color: #7A7A9D;
            }

            &__price {
                font-weight: 700;
                font-size: 18px;
                line-height: 20px;
                color: #2E384D;

                span {
                    color: #B2B7C1;
                }
            }
        }
    }
}
</style>