<template>
    <div class="scholarships-wrap">
        <b-row class="top-text">
            <h3 class="top-text-heading">
                Team
            </h3>
            <p class="sub-text">
                Instructors and mentors for the Stutern Graduate Accelerator are experts and leaders in their respective fields working with leading companies around the world.
            </p>
        </b-row>
        
        <b-row class="sets">    
            <b-col sm="12">
                <p class="set">
                    Instructors and mentors
                </p>
            </b-col>
            <b-col sm="12" class="content-holder">
                <b-row>
                    <b-col sm="3" v-for="(instructor, i) in instructors" :key="i">
                        <div class="card-wrap">
                            <div class="card-inner-wrapper" style="width: 100%; white-space: initial">
                                <div class="card" >
                                    <img class="imgg" :src="require(`../assets/Instructors/${instructor.photo}`)" alt="">
                                    <div class="user-details">
                                        <p class="name">
                                        {{instructor.name}} 
                                        </p>
                                        <p class="job-title">
                                        {{instructor.title}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            reducedSets: {},
            v1: 'scroll-wrapper',
            v2: 'scroll-wrapper2',
            instructors: [
                {
                    name: 'Silm Momoh',
                    photo: 'Slim.jpg',
                    title: 'Product Designer'
                },
                {
                    name: 'Uche Ugo',
                    photo: 'Uche.jpg',
                    title: 'Product Designer'
                },
                {
                    name: 'Gabriel Esu',
                    photo: 'Gabriel.jpg',
                    title: 'Product Designer'
                },
                {
                    name: 'Kolapo Oni',
                    photo: 'Kolapo.png',
                    title: 'Creative Developer'
                },
                {
                    name: 'Joseph Rex',
                    photo: 'Rex.jpg',
                    title: 'Software/Web application developer'
                },
                {
                    name: 'Bomanaziba Josiah',
                    photo: 'Boma.png',
                    title: 'Product Designer'
                },
                {
                    name: 'Olukayode',
                    photo: 'Kayode.png',
                    title: 'Web developer'
                },
                {
                    name: 'Adebanjo Segun',
                    photo: 'Segun.png',
                    title: 'Web developer'
                },
                {
                    name: 'Folorunsho Tosin',
                    photo: 'Tosin.png',
                    title: 'Web Designer'
                },
            ]
        }
    },
    computed: {
        ...mapGetters({
            sets: 'getSets',
            students: 'getStudents'
        })
    },
    methods: {
        toScholarship () {
            this.$router.push({name: 'ScholarshipChild', params: {scholarshipName: 'girlsInTech'}})
        },
        toLeft (i) {
            let cont = this.$refs[i][0]
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
        toRight (i) {
            let cont = this.$refs[i][0]
            cont.scrollLeft = 0
        },
        toSingle (user) {
            this.$router.push({name: 'SingleHire', params: {userId: user._id}})
        },
        log () {
            let cont = this.$refs['scroll-wrapper']
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
    },
    mounted () {
        this.reducedSets = this.students.reduce((agg, curr) => {  
          agg[curr.userSet] = agg[curr.userSet] ? agg[curr.userSet].concat(curr) : [curr];
          return agg
        }, {})
        for (let i = 0; i < this.sets.length; i++) {
            this.reducedSets[this.sets[i].setName]
            .sort(function(a,b) {
                if (a.userName > b.userName) return 1
                if (a.userName < b.userName) return -1
                return 0
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .scholarships-wrap {
        .top-text {
            padding: 120px 460px !important;
            text-align: center !important;
            background: rgba(247, 255, 254, 0.5);
            .top-text-heading {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                // line-height: normal;
                font-size: 32px;
                text-align: center;
                margin: 10px auto;
                color: #222829;
            }
            .sub-text {
                font-style: normal;
                font-weight: normal;
                line-height: 28px;
                font-size: 18px;
                text-align: center;
                color: #67747C;
            }
        }
        .banner {
            height: 450px;
            overflow: hidden;
            img {
                width: 100%
                // height: 360px
            }
        }
        .cards-wrap {
            .side-button {
                width: 100px;
                background-color: green;
                height: 200px;
            }
            .alumni-card  {
                display: inline;
                max-width: 19%;
                max-height: 300px;
                margin: 0 5px;
                background-color: red;
                overflow: hidden;
                img {
                    width: 100%
                } 
            }
            .inside {
                width: 150%;
                margin-top: 20px;
                height: 350px;
                // background-color: green;
                padding: 20px 0 20px 0px;
                overflow: auto;
                transition: linear 0.5s all;
                overflow-x: auto;
                .my-btn {
                    // width: 5%;
                    cursor: pointer;
                    text-align: center;
                    background-color: red;
                }
                .inside-inside {
                    height: 100%;
                    background-color: rgb(181, 181, 181);
                    min-width: 18.00%;
                    margin: 0 0.5%;
                    border: 1px solid #EEE;
                    display: inline-block;
                    // margin-left: -200px;
                }
                .card-none {
                    display: none
                }
                .block {
                    display: inline-block;
                }
                .btn-none {
                    display: none;
                    // width: 0;
                    overflow: hidden;
                }
                .btn-block {
                    display: inline-block;
                    width: 5%;
                    transition: linear 3s all;
                }
            }
        }
        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }
        .sets {
            .set {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                line-height: normal;
                font-size: 24px;
                margin: 0px 0 15px 110px;
                color: #00D7C4;
            }
                .side-btn {
                    .full {
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        margin-top: -30px;
                        button {
                            background-color: #fff;
                            border: 0 !important;
                            img {
                                height: 25px;
                            }
                            .left-img {
                                -ms-transform: rotate(180deg); /* IE 9 */
                                -webkit-transform: rotate(180deg); /* Safari 3-8 */
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
                .content-holder {
                    white-space: nowrap;
                    overflow-y: auto;
                    padding: 0 120px;
                    scroll-behavior: smooth;
                .card-wrap {
                    width: 100%;
                    display: inline-block;
                }
                .card {
                    display: inline-block;
                    width: 100%;
                    height: 300px;
                    border: 0 !important;
                    border-radius: 4px !important;
                    // background-color: #67747C;
                    margin: 0 15px 10px 0;
                    overflow: hidden;
                    cursor: pointer;
                    scroll-behavior: smooth;
                    .user-details {
                            position: relative;
                            top: -325px;
                            margin: 0 0 0 0px;
                            padding-left: 20px;
                            height: 100%;
                            padding-top: 230px;
                            background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(54, 54, 54, 0) 45.54%);
                            color: #fff;
                        .name {
                            font-family: 'Playfair Display', serif;
                            font-style: normal;
                            font-weight: normal;
                            line-height: 27px;
                            font-size: 16px;
                            margin: 0;
                        }
                        .job-title {
                            font-style: normal;
                            font-weight: normal;
                            line-height: 24px;
                            font-size: 14px;
                        }
                    }
                    
                    .user-details:hover {
                    // margin: -100px 0 0 0;
                        padding-top: 220px;
                        transition: linear all 0.4s
                    }
                    img {
                        height: 110%;
                        filter: grayscale(0.99);
                        transition: all 0.5s
                    }
                    button {
                        border: 0;
                        background-color: transparent;
                        color: #67747C;
                        height: 100%;
                        width: 110px;
                        cursor: pointer;
                    }
                }
                .card:hover img {
                    transform: scale(1.05);
                    filter: grayscale(0.1)
                }
                // }
            }
        }
        button:hover {
            transform: translateY(-3px) !important;
            transition: all 0.6s;
            cursor: pointer
        }
        @media (max-width: 767px) {
            .top-text {
                padding: 90px 12px !important;
                margin: 0 !important;
                .top-text-heading {
                    font-size: 28px
                }
                .sub-text {
                    font-size: 16px;
                    line-height: 24px
                }
            }
            .banner {
                height: 300px;
                img {
                    height: 90%;
                    width: 220%;
                    margin-left: -12%
                }
            }
            .sets {
                .set {
                    margin: 10px 20px
                }
                .content-holder {
                    padding: 20px !important;
                    .card-wrap {
                        .card-inner-wrapper {
                            padding: 10px 20px !important;
                            .card {
                                display: inline-block;
                                height: 250px;
                                border: 0 !important;
                                border-radius: 4px !important;
                                overflow: hidden;
                                cursor: pointer;
                                margin: 12px auto;
                                min-width: 100% !important;
                                scroll-behavior: smooth;
                                img {
                                    width: 100% !important;
                                    max-width: 200% !important;
                                    -webkit-filter: grayscale(0.99);
                                    filter: grayscale(0.99);
                                    -webkit-transition: all 0.5s;
                                    transition: all 0.5s;
                                }
                                .user-details {
                                    position: relative;
                                    top: -275px;
                                    margin: 0 0 0 0px;
                                    padding-left: 20px;
                                    height: 100%;
                                    padding-top: 189px;
                                    background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(54, 54, 54, 0) 45.54%);
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>