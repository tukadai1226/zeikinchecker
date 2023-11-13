class ZeikinsController < ApplicationController

  def index
    
  end

  def show
    case params[:id] 
      when "1"
        render "show_1"
      when "2"
        render 'show_2'
      when "3"
        render 'show_3'
      when "11"
        render 'show_11'
      when "12"
        render 'show_12'
      when "13"
        render 'show_13'
      when "21"
        render 'show_21'
      when "22"
        render 'show_22'
      when "23"
        render 'show_23'
      when "31"
        render 'show_31'
      when "32"
        render 'show_32'
      when "33"
        render 'show_33'
    end
  end
end


