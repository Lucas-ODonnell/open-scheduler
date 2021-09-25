module Api
  module V1
    class DocumentsController < ApplicationController
      before_action :authenticate_user!

      def index
        documents = Document.where(user_id: current_user).order("created_at ASC").includes([file_attachment: :blob])
        render json: DocumentSerializer.new(documents).serializable_hash.to_json
      end

      def create
        document = Document.new(document_params)
        document.user_id = current_user.id
        if document.save
          render json: DocumentSerializer.new(document).serializable_hash.to_json
          else
          render json: document.errors.full_messages, status: 422
        end
      end

      def destroy
        document = Document.find(params[:id])
        if document.destroy
          head :no_content
          else
          render json: document.errors.full_messages, status: 422
        end
      end
      private

      def document_params
        params.require(:document).permit(:title, :description, :file)
      end
    end
  end
end
