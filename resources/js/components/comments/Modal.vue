<template lang="">
    <div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Обновление текста</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <slot>
      
        </slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button @click='updateMessage' type="button" class="btn btn-primary" data-bs-dismiss="modal">Обновить</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
export default {
    name:'Modal',
    props:[
       'UpdateComm'
    ],
    data(){
        return{
         
        }
    },
    methods:{
        updateMessage(){
           this.$emit('UpdateComm')
        }
    }
}
</script>
<style>
    
</style>