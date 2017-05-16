class Api::BenchesController < ApplicationController
  def index
    @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save
    self.index
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end

end
