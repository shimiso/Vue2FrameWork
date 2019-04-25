<template>
      <div>
        <!-- quill-editor -->
        <quill-editor v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
      </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import Quill from 'quill'
  import { quillEditor } from 'vue-quill-editor'

  import  ImageResize  from 'quill-image-resize-module';
  Quill.register('modules/imageResize', ImageResize);

  import { ImageDrop } from 'quill-image-drop-module';
  Quill.register('modules/imageDrop', ImageDrop);

  const quillTable = require('quill-table');
 
  Quill.register(quillTable.TableCell);
  Quill.register(quillTable.TableRow);
  Quill.register(quillTable.Table);
  Quill.register(quillTable.Contain);
  Quill.register('modules/table', quillTable.TableModule);

  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        name: 'register-modules-example',
        content: '',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video'],
              [
                { 'table-body': 'TBODY' },
                { 'table-insert-rows': 'ITR' },
                { 'table-insert-columns': 'TIC' },
                { 'table-delete-rows': 'IDR' },
                { 'table-delete-columns': 'TDC' },
                { 'table-delete-body': 'TDB' }
              ]
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
          }
        }
      }
    },

    computed: {
    },
    methods: {
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      }
    }
  }
</script>

<style>
  @import "../../static/style/editor.css";
  .quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {
    height: 30rem;
    padding-bottom: 1rem;
  }
</style>

<style lang="scss" scoped>

</style>
