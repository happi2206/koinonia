<template>
    <div>
         <div class="border-bottom py-3 px-md-5 px-3">
                <h2 class="brown24 my-1 graytext">Description</h2>
                <div
                  class="brownparagraph darktext"
                  v-html="courseDetail.long_description"
                ></div>
              </div>

              <div class="px-md-5 px-3 pb-5">
                <h2 class="brown24 my-3 graytext">Scheme of work</h2>

                <p
                  class="
                    lightgraytext
                    medbrownparagraph
                    d-flex
                    align-items-center
                  "
                >
                  <span
                    class="iconify"
                    data-icon="dashicons:info"
                    data-width="20"
                    data-height="20"
                  ></span>

                  <span class="mx-2">
                    Here’s where you add course content—like lectures, course
                    sections, assignments, and more. Click a + icon on the left
                    to get started.</span
                  >
                </p>
                <div>
                  <b-icon icon="plus-square" @click="addScheme"></b-icon>

                  <div class="fullborder p-5 my-2"></div>
                </div>
              </div>
    </div>
</template>
<script>
export default {
    props: {
        courseDetail:{
            type:Object,
            default:()=>{
                return {
                    long_description:''
                }
            }
        }
    },
    data(){
        return{
 schemeOfWork: [{ title: '', objective: 'objective' }],
        }
    },
    methods:{
 addScheme() {
      this.schemeOfWork.push({
        title: '',
        objective: '',
      })
    },
    }
    
}
</script>