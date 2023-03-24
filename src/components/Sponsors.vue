<script setup>
import showIcon from '../assets/icons/eye.svg'
</script>

<script>
export default {
    name: 'Sponsors',
    data() {
        return {
            sponsorsList: [
                {
                    id: 1,
                    name: 'Alimov Abror Xabibullayevich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '30 000 000',
                    sum: '0',
                    date: '15.01.2021',
                    activity: 'Yangi',
                    howis: 'new'
                },
                {
                    id: 2,
                    name: 'Saimov Rustam Saimjonovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '1 000 000',
                    sum: '0',
                    date: '02.02.2021',
                    activity: 'Moderatsiyada',
                    howis: 'modified'
                },
                {
                    id: 3,
                    name: 'Sanginov Otabek Muratovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '5 000 000',
                    sum: '5 000 000',
                    date: '20.04.2021',
                    activity: 'Tasdiqlangan',
                    howis: 'actived'
                },
                {
                    id: 4,
                    name: 'Nazarov Sanjar Olimovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '7 000 000',
                    sum: '7 000 000',
                    date: '03.05.2021',
                    activity: 'Bekor qilingan',
                    howis: 'cancel'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="sponsors">
        <div class="container">
            <div class="sponsors__box">
                <div class="sponsors__header">
                    <ul class="sponsors__header-list">
                        <li class="number">#</li>
                        <li class="name">f.i.sh.</li>
                        <li class="telefon">Tel.Raqami</li>
                        <li class="summ">Homiylik summasi</li>
                        <li class="summ__two">Sarflangan summa</li>
                        <li class="date">Sana</li>
                        <li class="activity">Holati</li>
                        <li class="show">Amallar</li>
                    </ul>
                </div>
                <div class="sponsors__body">
                    <ul class="sponsors__body-list">
                        <li v-for="(item, index) in this.sponsorsList"
                            :key="index"
                            class="item">
                            <ul class="item__box">
                                <li class="number">{{ item.id }}</li>
                                <li class="name">{{ item.name }}</li>
                                <li class="telefon">{{ item.tel }}</li>
                                <li class="summ">{{ item.sumSponsor }} <span>UZS</span></li>
                                <li class="summ__two">{{ item.sum }} <span>UZS</span></li>
                                <li class="date">{{ item.date }}</li>
                                <li class="activity"
                                    :class="item.howis">{{ item.activity }}</li>
                                <li class="show">
                                    <img :src="showIcon"
                                        alt="showIcon">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sponsors__pagination">
                <div class="sponsors__pagination-count">
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.sponsors {
    padding: 48px 0px;
    width: 100%;
    overflow-x: hidden;

    .container {
        overflow-x: auto;
    }

    &__box {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 1100px;
    }

    &__header {
        width: 100%;

        &-list {
            width: 100%;
            display: flex;
            align-items: center;

            li {
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #B1B1B8;
                text-align: center;

                &.number {
                    width: 5%;
                }

                &.name {
                    width: 20%;
                    text-align: left;
                }

                &.telefon {
                    width: 15%;
                }

                &.summ {
                    width: 15%;
                }

                &.summ__two {
                    width: 15%;
                }

                &.date {
                    width: 10%;
                }

                &.activity {
                    width: 12%;
                }

                &.show {
                    width: 8%;
                }
            }
        }
    }

    &__body {
        width: 100%;

        &-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;

            .item {
                background: #FFFFFF;
                border: 1px solid rgba(46, 91, 255, 0.08);
                border-radius: 8px;
                padding: 25px 0px;
                width: 100%;

                &__box {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    text-align: center;

                    .number {
                        width: 5%;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;
                        text-align: center;
                        color: #1D1D1F;
                    }

                    .name {
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 18px;
                        color: #1D1D1F;
                        width: 20%;
                        text-align: left;
                    }

                    .telefon {
                        width: 15%;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                        color: #1D1D1F;
                    }

                    .summ {
                        width: 15%;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        color: #2E384D;

                        span {
                            color: #B2B7C1;
                        }
                    }

                    .summ__two {
                        width: 15%;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        text-align: center;
                        color: #2E384D;

                        span {
                            color: #B2B7C1;
                        }
                    }

                    .date {
                        width: 10%;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                        color: #1D1D1F;
                    }

                    .activity {
                        width: 12%;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;

                        &.new {
                            color: #5BABF2;
                        }

                        &.modified {
                            color: #FFA445;
                        }

                        &.actived {
                            color: #00CF83;
                        }

                        &.cancel {
                            color: #979797;
                        }
                    }

                    .show {
                        width: 8%;
                    }
                }
            }
        }
    }

}
</style>