<script setup>
import userImg from '../../assets/images/user.jpg'
import editIcon from '../../assets/icons/edit.svg'
import leftarrowIcon from '../../assets/icons/leftarrow.svg'
import bottomImg from '../../assets/images/rocket.png'

import SingleEditModal from '../modals/SingleEditModal.vue'
</script>

<script>
export default {
    name: "Single",
    data() {
        return {
            edit: true,
        }
    },
    methods: {
        openModal() {
            this.edit = !this.edit
        }
    }
}
</script>

<template>
    <section class="single">
        <div class="single__header">
            <div class="container">
                <button @click="this.$router.push('/admin')"
                    class="single__header-btn">
                    <img :src="leftarrowIcon"
                        alt="arrow">
                </button>
                <div class="single__header-box">
                    <h2 class="single__header-name">Ishmuhammedov Aziz Ishqobilovich</h2>
                    <div class="single__header-status actived">Tasdiqlangan</div>
                </div>
            </div>
        </div>
        <div class="single__body">
            <div class="single__body-header">
                <h1 class="title">Homiy haqida</h1>
                <button @click="openModal"
                    class="edit">
                    <img :src="editIcon"
                        alt="edit">
                    <h3 class="edit__text">Tahrirlash</h3>
                </button>
            </div>
            <div class="user">
                <div class="user__img">
                    <img :src="userImg"
                        alt="">
                </div>
                <div class="user__name">
                    Ishmuhammedov Aziz Ishqobilovich
                </div>
            </div>
            <div class="single__body-box">
                <div class="item">
                    <h4 class="item__title">telefon raqam</h4>
                    <h3 class="item__text">+998 99 973-72-60</h3>
                </div>
                <div class="item">
                    <h4 class="item__title">Homiylik summasi</h4>
                    <h3 class="item__text">30 000 000 UZS</h3>
                </div>
                <div class="item">
                    <h4 class="item__title">Tashkilot nomi</h4>
                    <h3 class="item__text">Orient Group Corporation</h3>
                </div>
            </div>
        </div>
        <div class="single__bottom">
            <img :src="bottomImg"
                alt="rocket">
        </div>
    </section>

    <single-edit-modal @closeEdit="openModal"
        :open="this.edit" />
</template>

<style lang="scss" scoped>
.single {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__header {
        width: 100%;
        background: hsl(0, 0%, 100%);
        padding: 20px 0px;

        .container {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &-btn {
            background: none;
            cursor: pointer;
        }

        &-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #28293D;
        }

        &-status {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            padding: 6px 11px 6px 12px;
            border-radius: 5px;

            &.actived {
                color: #00CF83;
                background: #DDFFF2;
            }

            &.moderation {
                color: #FFA445;
                background: #ffe7cd;
            }

            &.new {
                color: #5BABF2;
                background: #e0f1ff;
            }

            &.cancel {
                color: #979797;
                background: #ecebeb;
            }
        }

        &-box {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }

    &__body {
        max-width: 790px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #EBEEFC;
        box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
        border-radius: 12px;
        padding: 24px 32px;
        margin-top: 40px;

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
                color: #28293D;
            }

            .edit {
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 10px 30px;
                background: #EDF1FD;
                border-radius: 5px;

                &__text {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    color: #3365FC;
                }
            }
        }

        .user {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 26px;

            &__img {
                border-radius: 6px;
                width: 64px;
                height: 64px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &__name {
                font-weight: 500;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: -0.01em;
                color: #212121;
                max-width: 170px;
            }
        }

        &-box {
            display: flex;
            align-items: center;
            margin-top: 24px;
            flex-wrap: wrap;
            row-gap: 24px;

            .item {
                width: 50%;
                display: flex;
                flex-direction: column;
                gap: 12px;

                &__title {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 1.125px;
                    text-transform: uppercase;
                    color: #B5B5C3;
                }

                &__text {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 130%;
                    letter-spacing: -0.01em;
                    color: #212121;
                }
            }
        }
    }

    &__bottom {
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
}
</style>