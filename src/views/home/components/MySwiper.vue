<template>
    <div class="my-swiper-container">
        <swiper class="my-swiper" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>
<script>
const swiperOption = {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
};
export default {
    name: "MySwiper",
    props: {
        list: {
            type: Array,
        },
    },
    data() {
        return {
            swiperOption,
        };
    },
};
</script>
<style lang="scss" scoped>
.my-swiper-container {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 31.25%;
    .swiper-img {
        width: 100%;
    }
    ::v-deep .my-swiper {
        .swiper-pagination-bullet {
            background: #fff;
        }
    }
}
</style>